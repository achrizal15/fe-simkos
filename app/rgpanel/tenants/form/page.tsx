
import PrimeCard from "@/components/core/Card/PrimeCard"
import PrimeFileUpload from "@/components/core/FileUpload/PrimeFileUpload"
import Label from "@/components/core/Input/Label"
import PrimeCalendar from "@/components/core/Input/PrimeCalendar"
import PrimeInputMask from "@/components/core/Input/PrimeInputMask"
import PrimeInputText from "@/components/core/Input/PrimeInputText"
import IdentificationDocumentSelect from "./_components/IdentificationDocumentSelect"
import PrimeTextArea from "@/components/core/Input/PrimeTextArea"

const Form = () => {

    return (
        <PrimeCard title="Form Penyewa Baru" >
            <form action="">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="">
                        <PrimeFileUpload className="shadow-lg" emptyPlaceHolder="Seret dan tempel identitas dokumen pengenal, untuk mengapload." />
                    </div>
                    <div className="grid-cols-2 grid gap-2">
                        <div>
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="name" required={true}>Nama</Label>
                                <PrimeInputText id="name" name="name" placeholder="Jon" />
                                {/* <small className="p-error">casd</small>; */}
                            </div>
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="email" required={true}>Email</Label>
                                <PrimeInputText id="email" type="email" name="email" placeholder="example@simkos.com" />
                                {/* <small className="p-error">casd</small>; */}
                            </div>
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="identification_document" required={true}>Jenis Dokumen</Label>
                                <IdentificationDocumentSelect />
                                {/* <small className="p-error">casd</small>; */}
                            </div>

                        </div>
                        <div>
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="place_of_birth" required={true}>Tempat Lahir</Label>
                                <PrimeInputText id="place_of_birth" name="place_of_birth" placeholder="Jakarta" />
                                {/* <small className="p-error">casd</small>; */}
                            </div>
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="birthdate" required={true}>Tanggal Lahir</Label>
                                <PrimeCalendar id="birthdate" name="birthdate" placeholder="20/12/2000" />
                                {/* <small className="p-error">casd</small>; */}
                            </div>
                            <div className="flex flex-col gap-2 mb-2">
                                <Label htmlFor="phone" required={true}>No. Handphone</Label>
                                <PrimeInputMask id="phone" name="phone" />
                                {/* <small className="p-error">casd</small>; */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2 mb-2">
                            <Label htmlFor="original_address" required={true}>Alamat Asli</Label>
                            <PrimeTextArea rows={1} name="original_address" id="original_address"/>
                            {/* <small className="p-error">casd</small>; */}
                        </div>
                        <div className="grid grid-cols-2">

                        </div>
                    </div>
                </div>
            </form>
        </PrimeCard>
    )
}
export default Form