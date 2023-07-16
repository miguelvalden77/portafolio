import Link from "next/link"
import logo from "../../public/logo.svg"
import Image from "next/image"


export const Navbar = () =>{

    return(
        <header>
            <Image src={logo} alt="foto" width={100} height={100}/>
            <nav>
               <Link href="#">Home</Link> 
               <Link href="#">Proyectos</Link> 
               <Link href="#">Sobre mí</Link> 
            </nav>
        </header>
    )

}

