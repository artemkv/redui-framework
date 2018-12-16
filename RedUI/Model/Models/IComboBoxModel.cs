using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	interface IComboBoxModel : IDataBoundControlModel
	{
		string label { get; }
		string getOptionsFunction { get; }
		string optionIdProperty { get; }
		string optionValueProperty { get; }
		bool isRequired { get; }
		string validationErrorMessage { get; }
	}
}
