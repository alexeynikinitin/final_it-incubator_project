import React from 'react';
import './Content.css'
import {Button} from "../../../commons/button/Button";
import {Checkbox} from "../../../commons/checkbox/Checkbox";
import {DoubleRange} from "../../../commons/doubleRange/DoubleRange";
import {Range} from "../../../commons/range/Range";
import {EditableSpan} from "../../../commons/editableSpan/EditableSpan";
import {InputText} from "../../../commons/inputText/InputText";
import {Radio} from "../../../commons/radio/Radio";
import {Select} from "../../../commons/select/Select";

export const Content = () => {
   return (
      <div className="content">
         <div className="super_component">
            <Button>Button</Button>
         </div>
         <div className="super_component">
            <Checkbox/>
         </div>
         <div className="super_component">
            <EditableSpan value={"Editable span"}/>
         </div>
         <div className="super_component">
            <InputText/>
         </div>
         <div className="super_component">
            <Radio name={'radio'}
                   options={['Air', 'Clouds', 'Earth', 'Water']}
                   value={'Air'}/>
         </div>
         <div className="super_component">
            <Select options={['Air', 'Clouds', 'Earth', 'Water']}
                    value={'Air'}/>
         </div>
         <div className="super_component">
            <Range/>
         </div>
         <div className="super_component">
            <DoubleRange min={0} max={100}/>
         </div>
      </div>
   );
};