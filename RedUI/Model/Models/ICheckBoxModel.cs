using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	interface ICheckBoxModel : IDataBoundControlModel
	{
		string label { get; }
		bool isRequired { get; }
		string validationErrorMessage { get; }
	}
}
