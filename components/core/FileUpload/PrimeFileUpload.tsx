'use client'

import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadProps, ItemTemplateOptions } from "primereact/fileupload"
interface FileInterface extends File {
    objectURL: string
}
interface FileUploadInterface extends FileUploadProps {
    emptyPlaceHolder?: string
}
const PrimeFileUpload = ({ emptyPlaceHolder, ...rest }: FileUploadInterface) => {
    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };
    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { className, chooseButton, cancelButton } = options;

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {cancelButton}
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
    return (
        <FileUpload name="document"
            chooseOptions={chooseOptions}
            cancelOptions={cancelOptions}
            headerTemplate={headerTemplate} accept="image/*"
            maxFileSize={1000000}
            progressBarTemplate={<></>}
            contentStyle={{ padding: 0 }}
            itemTemplate={itemTemplate}
            emptyTemplate={
            <p className="p-10 text-center">
                {emptyPlaceHolder ? emptyPlaceHolder : "Drag and drop files to here to upload."}
            </p>}
            {...rest}
        />
    )
}
export default PrimeFileUpload