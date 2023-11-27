import { useState } from "react";

interface UseSearchReturn {
    url: string;
    setUrl: (text: string) => void;
}

export const useSearch: () => UseSearchReturn = () => {
    const [url, setUrl] = useState("");

    const updateUrl: (text: string) => void = text => {
        setUrl(text)
    }

    return {
        url,
        setUrl: updateUrl,
    }
}
