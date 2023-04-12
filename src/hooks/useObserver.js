import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoadung, callback) => {
    const observer = useRef();
    useEffect(()=> {
        var cb = function(entries, observer) {
          if(isLoadung) return;
          if(observer.current) observer.current.disconnect();
          if(entries[0].isIntersecting && canLoad) {
            callback()
          }
          
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
      }, [isLoadung])
}