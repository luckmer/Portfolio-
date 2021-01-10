import { Article, H1, Email } from "../Styles/Article";


const Contact = () =>{
    return(
        <Article initial ="initial" exit ="exit " animate ="animate">
            <div>
                <H1>CONTACT</H1>
            </div>
            <Email>
                <a  href="mailto:https://piotrsebastiangoik@gmail.com">
                    piotrsebastiangoik@gmail.com
                </a>
                <a href ="https://www.linkedin.com/in/piotr-goik-9403a01b7/">
                    linkedin Piotr Goik
                </a>
            </Email>
        </Article>
    )
}

export default Contact
