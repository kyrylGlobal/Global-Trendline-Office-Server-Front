import { IInstruction } from '../../../../types/instructions-types';
import Instruction from '../Instruction/Instruction';
import style from './raportEditingInstructions.module.scss';

const RaportEditiongInstructions = () => {

    const instrunctions: IInstruction[] = [
        {
            content: <span>Open <a href='https://baselinker.com/pl-PL/home/'>Baselinker</a> and press <b>Sign In.</b></span>
        },
        {
            content: <span>Zamówienia {">"} Faktury {">"} Rejestr sprzedaży.</span>
        },
        {
            content: <span>Check all invoices vat numbers and corrects.</span>,
            subContent: [
                {
                    content: <span>Check all invoices names.</span>,
                    subContent: [
                        {
                            content: <span>If it is company name. Then search information about company by using <a href='https://www.google.com'>Google</a>. Also use <a href='https://vat-search.com/search/Kör+93+Kft__Ruppert+Global+Kft'>this</a> site.</span>
                        }
                    ]
                },
                {
                    content: <span>Check all VAT numbers.</span>,
                    subContent: [
                        {
                            content: <span>Proper VAT numbrs patterns.</span>,
                            subContent: [
                                {
                                    content: <span>LT100012952412 - 12 numbers</span>
                                },
                                {
                                    content: <span>HR99999999999 - 11 numbers</span>
                                },
                                {
                                    content: <span>PL6972291040 - 10 numbers</span>
                                },
                                {
                                    content: <span>CZ6051131735 - 10 numbers</span>
                                },
                                {
                                    content: <span>SK2022582100 - 10 numbers</span>
                                },
                                {
                                    content: <span>BG6202283510 - 10 numbers</span>
                                },
                                {
                                    content: <span>DE999999999 - 9 numbers</span>
                                },
                                {
                                    content: <span>HU21190663 - 8 numbers</span>
                                },
                                {
                                    content: <span>RO28328920 - 8 numbers</span>
                                },
                                {
                                    content: <span>ATU99999999 - 8 numbers. Before numbers always shoul be "U" character.</span>
                                }
                            ]
                        },
                        {
                            content: <span>VIES</span>,
                            subContent: [
                                {
                                    content: <span>Open <a href='https://ec.europa.eu/taxation_customs/vies/vatResponse.html'>VIES</a> page.</span>
                                },
                                {
                                    content: <span>Check each VAT number.</span>,
                                    subContent: [
                                        {
                                            content: <span>If exist - change all invoice positions VAT rate to 0%.</span>
                                        },
                                        {
                                            content: <span>If not exist - set 23% VAT rate for each invoice position.</span>
                                        },
                                        {
                                            content: <span>If buyer is not a company then VAT rate should be the same as base for buyer country.</span>
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            content: <span>For each country generate invoices and corrections raports separately with and without VAT number.</span>
        },
        {
            content: <span>Each of generated file should be parsed by this app.</span>
        },
        {
            content: <span>Well done :) Now you can send it to accounting department.</span>
        }
    ]

    return (
        <div className={style.instructions}>
            <ul className={style.instructionList}>
                {instrunctions.map( (instruction, index) => {
                    return <Instruction instructionObj={instruction} index={index}/>
                })}
            </ul>
        </div>
    )
}

export default RaportEditiongInstructions;