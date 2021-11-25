import { useSelector } from "@xstate/react";
import { useCallback, useContext } from "react";
import { DiskSpaceMetricsModel } from "./machines";
import { MetricsContext } from "./MetricsProvider";
import { DurationOptions } from "./types";

export function useDiskSpace() {
  const { diskSpaceMetricsMachineService: service } = useContext(
    MetricsContext
  );

  const selector = useCallback(
    (state: typeof service.state) => ({
      ...state.context,
      isRefreshing: state.hasTag("refreshing"),
      isLoading: state.hasTag("loading"),
      isFailed: state.hasTag("failed"),
      isDataUnavailable: state.hasTag("no-data"),
    }),
    []
  );
  const {
    usedDiskSpaceMetrics,
    connectionAttemptRateMetrics,
    duration,
    isLoading,
    isRefreshing,
    isDataUnavailable,
    isFailed,
  } = useSelector(service, selector);

  const onDurationChange = useCallback(
    (duration: DurationOptions) =>
      service.send(DiskSpaceMetricsModel.events.selectDuration(duration)),
    [service]
  );

  const onRefresh = useCallback(
    () => service.send(DiskSpaceMetricsModel.events.refresh()),
    [service]
  );

  return {
    usedDiskSpaceMetrics,
    connectionAttemptRateMetrics,
    isLoading,
    isRefreshing,
    isFailed,
    isDataUnavailable,
    duration,
    onDurationChange,
    onRefresh,
  };
}
