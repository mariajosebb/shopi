import { useWindowSize } from "@uidotdev/usehooks";

const useMobile = ()=>{

    const size = useWindowSize();
    const isMobile = size.width < 768;
    return isMobile;

}
export default useMobile;