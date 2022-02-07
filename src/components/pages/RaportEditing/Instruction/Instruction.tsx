import React, { FC, useState } from "react";
import { IInstruction } from "../../../../types/instructions-types";
import style from './instruction.module.scss';

interface InstructionComponentData {
    instructionObj: IInstruction,
    index: number,
    baseIndex?: string
}

const Instruction: FC<InstructionComponentData> = ({instructionObj, index, baseIndex}) => {
    let [showSub, setShowSub] = useState(false);

    const onShowSub = (e: React.MouseEvent<HTMLElement>) => {
        if (instructionObj.subContent) {
            instructionObj.subContent.length > 0 && setShowSub(!showSub);
        }
    }

    return(
        <li className={style.instruction}>
            <span className={style.content} onClick={onShowSub}>{index+1}. - {instructionObj.content}</span>
            {showSub && <ul className={style.subContent}>
                {instructionObj.subContent?.map( (sub, index) => {
                    return <Instruction index={index} instructionObj={sub}/>
                })}
            </ul>}
        </li>
    );
}

export default Instruction;