
export const handleScrollDown = () =>{
    window.scroll({top:1200 , behavior:"smooth"});
}

export const  disableScroll = () =>  {
    document.body.style.overflow = 'hidden';
    window.onbeforeunload = function () {
        window.scrollTo ( 0 , 0 );
    }
}

export const  enableScroll = () =>  {
    document.body.style.overflow = null;
}

