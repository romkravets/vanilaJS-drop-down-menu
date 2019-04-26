import './index.scss';
import { dropDown} from './scripts/drop-down';
import { dropDownDynamic } from './scripts/drop-down-dynamic';

dropDown('#dropDpwnCountries');
dropDownDynamic('#dropDownLanguages', ['ENGLISH', 'GERMANY', 'ITALIAN', 'TURKISH']);
dropDownDynamic('#dropDownCurrencies', ['USD', 'EUR', 'CAD', 'UHR', 'FRA']);