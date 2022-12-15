import inquirer from "inquirer";
import chalk from 'chalk';
let typeScript_Biolerplate = await inquirer.prompt([{
        name: "Biolerplate",
        type: String,
        message: "welcom to the type Script Biolerplate"
    }]);
console.log(chalk.green(typeScript_Biolerplate.Biolerplate));
//# sourceMappingURL=index.js.map