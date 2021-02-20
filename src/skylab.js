import { useCallback, useContext, useEffect, useState } from 'react';
import { Skylab } from '@amplitude/skylab-js-client';
import React, { createContext } from 'react';

Skylab.init('client-IAxMYws9vVQESrrK88aTcToyqMxiiJoR', {
  initialFlags: { 'js-browser-demo': 'initial' },
  preferInitialFlags: true,
  debugEnrollmentRequests: true,
  debug: true,
});

export const SkylabContext = createContext({
  client: null,
  ready: false,
  loaded: false,
});

export const useSkylab = () => {
  return useContext(SkylabContext);
};

export const SkylabProvider = (props) => {
  const { instanceName, skylabUser, children } = props;
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const startSkylab = useCallback(async () => {
    try {
      await Skylab.getInstance(instanceName)
        .start(skylabUser);
    } finally {
      setLoaded(true);
    }
  }, [instanceName, skylabUser]);

  useEffect(() => {
    console.log('starting skylab');
    startSkylab();
    setReady(true);
  }, [startSkylab]);

  return (
    ready && (
      <SkylabContext.Provider
        value={{
          client: Skylab.getInstance(instanceName),
          ready: ready,
          loaded: loaded,
        }}
      >
        {children}
      </SkylabContext.Provider>
    )
  );
};
