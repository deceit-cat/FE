import { useState } from "react";
import { ViewList } from "../../../components/Main/ViewList"
import { ChattingPane } from "../../../components/Main/Chat/ChattingPane";

export const UserAndChat = ({ setIsChatContentActive, isChatContentActive, USERS, iconsState }) => {
    const [choosedUser, setChoosedUser] = useState(null);

    return (
        <>
            <ViewList setIsChatContentActive={setIsChatContentActive} users={USERS} setChoosedUser={setChoosedUser} iconsState={iconsState} />
            {
                isChatContentActive ? (
                    <ChattingPane className="right-pane" userdata={choosedUser}/>
                ) : null
            }
        </>
    )
}