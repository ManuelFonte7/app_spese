import { firestore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";
import { uploadFileToCloudinary } from "./ImageService";

export const updateUser = async (
    uid: string,
    updateData: UserDataType
): Promise<ResponseType> => {
    try{
        if(updateData.image && updateData?.image?.uri){
            const imageUploadRes = await uploadFileToCloudinary(updateData.image, "users");
            if(!imageUploadRes.success){
                return {success: false, msg: imageUploadRes.msg || "Caricamento immagine fallito"}
            }
            updateData.image = imageUploadRes.data;
        }
        const userRef = doc(firestore, "users", uid);
        await updateDoc(userRef, updateData);


        return {success: true, msg: "Modificato correttamente"}
    }catch(error: any){
        console.log("Errore nella modifica dell'utente", error);
        return{success: false, msg: error?.message};
    }
}
