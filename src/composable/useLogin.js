import { ref } from "vue";
import { auth } from "../firebase/config";

let error = ref(null);

let signIn = async (email, password) => {
  try {
    let res = await auth.signInWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Please enter correct email and password')
    }
    return res;
  }
  catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
}

let useLogin = () => {
  return { error, signIn }
}

export default useLogin;