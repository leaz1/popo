import {useParams} from "react-router-dom";

export function TagScreen() {

    const params = useParams();
    const name = params['tagId'];

    return (
        <div>
            <h2>
                Tag: { name }
            </h2>
        </div>
    )
}
