import {useParams} from "react-router-dom";

export function WorkScreen() {

    const params = useParams();
    const name = params['workId'];

    return (
        <div>
            <h2>
                Work: { name }
            </h2>
        </div>
    )
}
