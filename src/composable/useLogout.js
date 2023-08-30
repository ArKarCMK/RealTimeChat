import { auth } from "@/firebase/config"


let logout = async () => {
  try {
    await auth.signOut()
    console.log("userLogout")
  } catch (err) {
    console.log("error from logout", err.message)
  }
}

let useLogout = () => {
  return logout
}

export default useLogout;