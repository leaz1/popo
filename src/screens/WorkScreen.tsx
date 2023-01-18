import {useParams} from "react-router-dom";

export function WorkScreen() {

    const params = useParams();
    const name = params['workId'];

    return (
        <div>
            <h2>
                Work: { name }
            </h2>
            <div className="work-area">
                <div className="work-read-area">
                    <div className="work-meta-area">

                    </div>
                    <div className="work-chapters-area">

                    </div>
                </div>
                <div className="work-helper-area">

                </div>
            </div>
        </div>
    )
}
