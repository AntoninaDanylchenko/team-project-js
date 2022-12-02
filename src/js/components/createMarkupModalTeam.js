import { refs } from '../references/references';
import usersData from '../components/user-data.json';
import infoUsers from '../../templates/infoUserCard.hbs';

const markup = usersData.map(infoUsers).join(' ');
refs.container.insertAdjacentHTML('beforeend', markup);
