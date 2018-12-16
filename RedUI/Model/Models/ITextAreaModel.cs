using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	interface ITextAreaModel : IDataBoundControlModel
	{
		string label { get; }
		int columns { get; }
		int rows { get; }
		bool isRequired { get; }
		string validationErrorMessage { get; }
	}
}
