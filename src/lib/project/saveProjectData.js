import fs from "fs-extra";
import path from "path";

const saveProjectData = async (projectPath, project) => {
  fs.writeFileSync(projectPath, JSON.stringify(project, null, 4));
};

export default saveProjectData;
