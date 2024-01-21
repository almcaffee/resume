import { getExperience } from './generators/fetchDatabase';

getExperience().then((data) => {
  console.log(data);
});
