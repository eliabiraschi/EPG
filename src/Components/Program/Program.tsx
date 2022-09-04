import React from 'react';
import type { Program as ProgramType } from '../../Modules/Api';
import {
  parseTime,
  getMinutesToMidnight,
  programDurationInSec,
  convertDurationToWidth,
  isNow,
} from '../../Modules/SpaceTime';
import './Program.css';

interface Props {
  program: ProgramType;
  isLast?: boolean;
}

function Program(props: Props) {
  const program = props.program;
  const minWidth = convertDurationToWidth(programDurationInSec(program.start, program.end));
  return (
    <>
      <div
        key={program.id}
        className={`program${isNow(program.start, program.end) ? ' now' : ''}`}
        style={{
          minWidth: `${minWidth}rem`,
        }}
      >
        <div><strong>{program.title}</strong></div>
        <div className="light-grey">{parseTime(program.start, program.end)}</div>
      </div>
      {
        props.isLast && (
          <div
            key={`${program.id}-padding`}
            className="program stripes"
            style={{
              minWidth: `${(getMinutesToMidnight(program.end) * 0.6)}rem`,
            }}
          ></div>
        )
      }
    </>
  );
}

export default Program;
