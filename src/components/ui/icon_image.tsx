import Image from "next/image";

export default function IconImage(src:any){
    return(
        <Image src={src} alt="ICON" height={32} width={32}/>
    );
}