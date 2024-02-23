export const formatCurrency = (val: number, locale = "en-US", unit = "USD") => {
	return val.toLocaleString(locale, {
		maximumFractionDigits: 2,
		style: "currency",
		currency: unit
	});
};

export const formatTokenAmount = (amount: number, locale = "en-US") => {
	return amount.toLocaleString(locale);
};