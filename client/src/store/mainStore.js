import {observable, action} from 'mobx';
import { getData} from '../actions/requests';

class MainStore {
    @observable
    data = []

}
export default MainStore;