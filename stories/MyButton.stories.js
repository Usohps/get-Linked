import MyButton from "./MyButton"

export default {
  title: "Test/Mybutton",
  component: MyButton
};
export const Default= ()=><MyButton/>
export const Large = {
    args:{
        size:"Large",
        valve: "Large Text here"
    }
}