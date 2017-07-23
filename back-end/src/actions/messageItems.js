import { MESSAGE_ITEMS_ON_DELETE } from 'constants/actionTypes';

export function onDeleteRow(value) {
  return ({
    type: MESSAGE_ITEMS_ON_DELETE,
    payload: value,
  });
}
