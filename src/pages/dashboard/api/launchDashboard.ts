import FetchUtils from 'services/api';
import Notification from 'utils/notifications';
import get from 'lodash/get';

const fetchLaunchesData = async (type: string = '', limit?: number) => {
  const apiEndPoint = `launches/${type}?limit=${limit}`;
  const response = await FetchUtils.getData(apiEndPoint);

  if (get(response, `error`)) {
    Notification.handleApiToast({
      title: 'Error fetching launches data.',
    });
  }

  return get(response, `data`, []);
};

const fetchLocationsData = async () => {
  const apiEndPoint = 'launchpads';
  const response = await FetchUtils.getData(apiEndPoint);

  if (get(response, `error`)) {
    Notification.handleApiToast({
      title: 'Error fetching launches data.',
    });
  }

  return get(response, `data`, []);
};

export { fetchLaunchesData, fetchLocationsData };
