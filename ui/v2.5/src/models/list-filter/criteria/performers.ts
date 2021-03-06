import { CriterionModifier } from "src/core/generated-graphql";
import { ILabeledId, IOptionType } from "../types";
import { Criterion, CriterionType, ICriterionOption } from "./criterion";

export class PerformersCriterion extends Criterion {
  public type: CriterionType = "performers";
  public parameterName: string = "performers";
  public modifier = CriterionModifier.IncludesAll;
  public modifierOptions = [
    Criterion.getModifierOption(CriterionModifier.IncludesAll),
    Criterion.getModifierOption(CriterionModifier.Includes),
    Criterion.getModifierOption(CriterionModifier.Excludes)
  ];
  public options: IOptionType[] = [];
  public value: ILabeledId[] = [];
}

export class PerformersCriterionOption implements ICriterionOption {
  public label: string = Criterion.getLabel("performers");
  public value: CriterionType = "performers";
}
