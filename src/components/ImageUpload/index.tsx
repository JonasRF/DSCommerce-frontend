import { useState } from "react";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../../utils/requests";
import styles from './imageUpload.module.css';
import UploadImg from '../../../src/assets/upload.jpg';

type Props = {
    onUploadSucess: (imgUrl: string) => void;
    productImgUrl: string;
}

export default function ImageUpload({ productImgUrl, onUploadSucess }: Props) {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedImgUrl, setUploadedImgUrl] = useState("");

    const imgUrl = uploadedImgUrl || productImgUrl;

    const onUploadProgress = (progressEvent: ProgressEvent) => {
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);

        setUploadProgress(progress);
    }

    const uploadImage = async (selectedImage: File) => {
        const payload = new FormData();
        payload.append("file", selectedImage);

        const config: AxiosRequestConfig = {
            url: '/products/image',
            method: "POST",
            data: payload,
            onUploadProgress() {
                onUploadProgress
            },
            withCredentials: true

        }
        return requestBackend(config).then((response) => {
            setUploadedImgUrl(response.data.uri);
            onUploadSucess(response.data.uri);
        })
            .catch(() => console.log('Erro ao enviar arquivo!')
            )
            .finally(() => setUploadProgress(0))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files?.[0];

        if (selectedImage) {
            uploadImage(selectedImage);
        }
    }
    return (
        <div className="row">
            <div className="col-6">
                <div className={styles.uploadButtonContainer}>
                    <input type="file" id="upload" accept="image/png, image/jpg" onChange={handleChange} hidden />
                    <label htmlFor='upload'>ADICIONAR IMAGEM</label>
                    <small className={styles.uploadTextHelper}>A imagem deve ser JPG ou PNG e <br /> não deve ultrapassar
                        <strong> 5 mb.</strong> </small>
                </div>
            </div>
            <div className="col-6">
                {
                    uploadProgress > 0 && (
                        <>
                            <img src={UploadImg} alt='Upload' />
                            <div className={styles.uploadProgressContainer}>
                                <div className={styles.uploadProgress} style={{ width: `${uploadProgress}` }}></div>
                            </div>
                        </>
                    )
                }
                {
                    imgUrl && uploadProgress === 0 && (
                        <img src={imgUrl} alt={imgUrl} className={styles.uploadImage} />
                    )
                }
            </div>
        </div>
    )
}