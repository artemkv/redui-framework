using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	interface ITextBoxModel : IDataBoundControlModel
	{
		string label { get; }
		bool isRequired { get; }
		string pattern { get; }
		string validationErrorMessage { get; }
		string inputType { get; }
	}
}
