import {JSX} from "react";
import {FooterProps} from "@/layout/Footer/Footer.props";


const Footer = ({...props}:FooterProps):JSX.Element => {
  return(<div {...props}>Footer</div>)
}

export default Footer;