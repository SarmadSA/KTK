package com.activekids.web.model.validation.order;

import javax.validation.GroupSequence;

@GroupSequence({FirstOrder.class, SecondOrder.class})
public interface OrderedChecks {
}
