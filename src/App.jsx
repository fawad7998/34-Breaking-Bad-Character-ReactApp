import ChatApp from "./chatapp"
import Prac from "./prac"


function App() {
  // const abc = async () => {
  //   const url = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'X-RapidAPI-Key': 'ab4ff99806mshfe4df21cee8730cp18a845jsn4e78faacc36c',
  //       'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
  //     },
  //     body: {
  //       messages: [
  //         {
  //           role: 'user',
  //           content: 'hello'
  //         }
  //       ],
  //       system_prompt: '',
  //       temperature: 0.9,
  //       top_k: 5,
  //       top_p: 0.9,
  //       max_tokens: 256,
  //       web_access: false
  //     }
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    <>
      {/* <ChatApp /> */}
      <Prac />
      {/* <button onClick={abc}>
        click
      </button> */}
    </>
  )
}

export default App
