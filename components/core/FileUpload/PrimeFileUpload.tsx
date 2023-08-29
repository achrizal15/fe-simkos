'use client'

import Image from "next/image";
import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadProps, ItemTemplateOptions } from "primereact/fileupload"
import PrimeButton from "../Button/PrimeButton";
import { useEffect, useState } from "react";
interface FileInterface extends File {
    objectURL: string
}
interface FileUploadInterface extends FileUploadProps {
    emptyPlaceHolder?: string,
    defaultPlaceholder?: string | null,
    fileUploadRef?: React.RefObject<FileUpload | null>;
    setValue?: {(value:string)}
}
const PrimeFileUpload: React.FC<FileUploadInterface> = ({ defaultPlaceholder, emptyPlaceHolder, fileUploadRef,setValue=()=>{}, ...rest }: FileUploadInterface) => {
    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const [initialValue, setInitialValue] = useState<string>(null)
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };
    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { className, chooseButton, cancelButton } = options;
        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {!cancelButton.props.disabled
                    ? cancelButton
                    : <PrimeButton icon="pi pi-times" type="button" severity="danger" onClick={() => {
                        fileUploadRef.current?.clear()
                        setInitialValue(null)
                        setValue("")
                    }} />
                }
            </div>
        );
    };
    const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
        const file: FileInterface = inFile as FileInterface;
        return (
            <div className="flex align-items-center flex-wrap">
                <img alt={file.name} role="presentation" src={file.objectURL} className="w-full h-full" />
            </div>
        );
    };
    useEffect(() => {
        if (defaultPlaceholder) {
            setInitialValue(defaultPlaceholder)
            setValue(defaultPlaceholder)
        }
    }, [defaultPlaceholder])
    return (
        <>
            <FileUpload name="document"
                chooseOptions={chooseOptions}
                cancelOptions={cancelOptions}
                headerTemplate={headerTemplate} accept="image/*"
                maxFileSize={1000000}
                progressBarTemplate={<></>}
                contentStyle={{ padding: 0 }}
                itemTemplate={itemTemplate}
                ref={fileUploadRef}
                onClear={() => console.log(2)}
                emptyTemplate={
                    !initialValue ?
                        <p className="p-10 text-center">
                            {emptyPlaceHolder ? emptyPlaceHolder : "Drag and drop files to here to upload."}
                        </p>
                        : <>
                            {initialValue != null && <Image priority src={defaultPlaceholder} height={200} width={800} alt="placeholder" />}
                        </>
                }
                {...rest}
            />
            {initialValue && <input type="text" hidden defaultValue={initialValue} />}
        </>
    )
}
export default PrimeFileUpload