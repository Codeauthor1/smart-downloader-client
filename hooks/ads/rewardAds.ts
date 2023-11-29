import { rewardAdsId } from 'constants/adsID';
import React, { useEffect, useState } from 'react';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.REWARDED :  rewardAdsId;

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export function useRewardAds() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setLoaded(true);
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);
    
    return {
        rewarded,
        loaded
    }

//   No advert ready to show yet
//   if (!loaded) {
//     return null;
//   }

//   return (
//     <Button
//       title="Show Rewarded Ad"
//       onPress={() => {
//         rewarded.show();
//       }}
//     />
//   );
}
