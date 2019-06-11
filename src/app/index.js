"use strict";

import Robot from "./robot";
import { booleanLiteral } from "@babel/types";

const inquirer = require('inquirer');

//Questions for input 
const questions = [
    {
      type: 'input',
      name: 'command',
      message: "Enter command"
    },
    {
        type: 'confirm',
        name: 'moreCommand',
        message: 'Want to enter another command?',
        default: true
    }
]

const rob = new Robot();

function ask() {
    // Prints questions to commands 
    inquirer.prompt(questions).then(answers => {
      const robotCommand = answers.command.split(" ");
      // Check the input commands 
        switch (robotCommand[0]) {
            case "PLACE":
                if (robotCommand[1] != null) {
                    const coordinates = robotCommand[1].split(",");
                    rob.place(coordinates[0], coordinates[1], coordinates[2]);
                }
                break;

            case "LEFT":
                rob.left();
                break;

            case "RIGHT":
                rob.right();
                break;

            case "MOVE":
                rob.move();
                break;

            case "REPORT":
                rob.report();
                break;

            default: 
                break;
        }
        
      if (answers.moreCommand) {
        ask();
      } else {
        console.log('Taking Robot off the table');
        rob.remove();
      }
    });
}

ask();
