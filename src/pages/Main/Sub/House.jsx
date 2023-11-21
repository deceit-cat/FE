import { Bell } from "../../../components/Main/House/Bell"
import { AlarmIcon, HouseContainer, InnerPane } from "../../../css/styled/Main/House/house.style"

export const House = () => {

    return (
        <>
            <HouseContainer>
                <InnerPane>
                    <h1 style={{color: "white"}}>Chart.js 사용하는 공간</h1>
                </InnerPane>

                <InnerPane>
                <h1 style={{color: "white"}}>아직 미정입니다</h1>
                </InnerPane>
            </HouseContainer>
            
            <Bell />
        </>
    )
}