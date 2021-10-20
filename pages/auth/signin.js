
import { getProviders, signIn as SignInto } from "next-auth/react";
import Header from "../components/Header";

function signIn({ providers }) {
    return (
        <>
            <Header />

            <div className="flex flex-col items-center
             justify-center min-h-screen py-2 -mt-56 px-14
             text-center
            ">
                <h5 className="p-5 text-3xl md:text-5xl mt-24 md:mt-0">Welcome to 🅸🅽🆂🆃🅰🆇🅸🆃</h5>
                <div className="mt-32">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className="p-3 bg-blue-500 rounded-lg text-white"
                                onClick={() => SignInto(provider.id, { callbackUrl: '/' })}>
                                ꜱɪɢɴ ɪɴ ᴡɪᴛʜ {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>



        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn;
