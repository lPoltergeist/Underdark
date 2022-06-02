import fetcher from '../../../lib/fetcher';
import { useEffect } from 'react';
import useSWR from 'swr';

interface Props {
    slug: string;
}

interface Views {
    count: number;
}

const ViewCounter = ({slug}: Props) => {
    const {data} = useSWR<Views>(`/api/views/${slug}`, fetcher);
    useEffect(() => {
        const registerView = () =>
        fetch(`/api/views/${slug}`, {
            method: "POST",
        });

        registerView();
    }, [slug]);
    return(
        <span>{`${
            (data?.count ?? 0) > 0 ? data.count.toLocaleString() : 0 
        } view(s) `}</span>
    );
};
export default ViewCounter;