
export default function LoginPage(){

    return(
        <di>
            <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-4">
                    Username
                    <input type="text" className="input" />
                </label>

                <label className="flex flex-col gap-4">
                    Password
                    <input type="text" className="input" />
                </label>

            </div>
        </di>
    )
}