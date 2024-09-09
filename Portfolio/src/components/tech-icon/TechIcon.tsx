export default function TechIcon(props: any) {

    const techType = (type: string) => {
        return "/src/assets/" + type + ".png"
    }

    return(
        <>
        <img src={techType(props.src)} title={props.src} style={{width:'50px', height:'50px', margin:'5px', borderRadius:'5px', borderStyle:'solid', borderWidth:'2px'}}/>
        </>
    )
}