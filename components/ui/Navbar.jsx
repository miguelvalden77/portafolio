import Link from "next/link"
import logo from "../../public/logo.svg"
import Image from "next/image"
import styles from "../../styles/Navbar.module.css"


export const Navbar = () =>{

    return(
        <header className={styles.header}>
            <Image src={logo} alt="foto" width={80} height={80}/>
            <nav className={styles.nav}>
               <Link href="#">Home</Link> 
               <Link href="#">Proyectos</Link> 
               <Link href="#">Sobre mí</Link> 
            </nav>
        </header>
    )

}

