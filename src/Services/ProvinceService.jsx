import { handleChooseStartLoading, handleChooseEndLoading } from '@Utils/Common';

export const provinceService = {
  layTatCaProvince(isLoading = true, isLoadingPopup = false) {
    const header = { isLoading, isLoadingPopup };
    const url = 'https://vapi.vnappmob.com/api/province';
    handleChooseStartLoading(header);
    return fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          handleChooseEndLoading(header);
          return data.results;
        })
        .catch(() => {
          handleChooseEndLoading(header);
        })
    );
  },
};
