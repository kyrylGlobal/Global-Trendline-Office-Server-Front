export interface IInstruction {
    content: JSX.Element;
    subContent?: IInstruction[];
}